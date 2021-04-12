import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import apikeys from '../apikeys';
import emailjs from 'emailjs-com'

class Contact extends Component{
    constructor(props){
        super(props);
   
        this.state = {
            fields: {},
            errors: {}
        }
     }

    componentDidMount(){
		document.title = "David Kim Salon de Beauté"
	}

    onSubmit=(e)=>{
        e.preventDefault()// Prevents default refresh by the browser
        if(this.handleValidation()) {
            emailjs.sendForm(apikeys.SERVICE_ID, apikeys.TEMPLATE_ID, e.target, apikeys.USER_ID)
            .then(result => {
                alert('Message Sent', result.text);
            },
            error => {
                alert('An error occured, Plese try again', error.text);
            })
        } else {
            alert("Your request is invalid!: please ensure to enter your name, email and appointment date and time that you wish.");
        }
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Valid name must be provided";
        } else { 
            if(typeof fields["name"] !== "undefined"){
                if(!fields["name"].match(/^[a-zA-Z ]+$/)){
                formIsValid = false;
                errors["name"] = "Name should contain only alphabets";
                }        
            }
        }
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Valid email must be provided";
        } else {
            if(typeof fields["email"] !== "undefined"){
                let lastAtPos = fields["email"].lastIndexOf('@');
                let lastDotPos = fields["email"].lastIndexOf('.');
     
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                   formIsValid = false;
                   errors["email"] = "Email is not valid";
                 }
             }
        }

        //Phone
        if(!fields["phone"]){
            formIsValid = false;
            errors["phone"] = "Valid phone number must be provided";
        } else {
            if(typeof fields["name"] !== "undefined"){
                if(!fields["name"].match(/^[a-zA-Z ]+$/)){
                   formIsValid = false;
                   errors["name"] = "Name should contain only alphabets";
                }        
             }
        }
        
        //Message
        if(!fields["message"]){
            formIsValid = false;
            errors["message"] = "Your appointment inquiry must be provided to arrange";
         }

       this.setState({errors: errors});
       return formIsValid;
    }

    render(){
        return (
			<div>
                {/* <section class="inner-page-banner" id="home">
                </section> */}
                <div class="breadcrumb-agile">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                        <Link to='/'>Home</Link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Book Appointment</li>
                    </ol>
                </div>
                <section class="content-info py-5">
                    <div class="container py-md-5">
                        <div class="text-center px-lg-5">
                            <h4 class="heading text-center mb-3 mb-sm-5">
                                <p>No walk-in please. All of our services are provided by appointment ONLY.</p>
                                <p>For <a href="https://www.wish.com/local">Wish</a> pickup customers, please kindly pick up your package only 
                                from Monday to Wednesday between 11AM and 2PM. Please comply with COVID-19 rules for any visit.</p>
                            </h4>
                        </div>
                        <div class="contact-w3pvt-form mt-5">
                            <form action="#" class="w3layouts-contact-fm" method="post" onSubmit={this.onSubmit}>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input class="form-control" name="name" type="text" size="30" placeholder="Type your name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                                        </div>
                                        {/* <div class="form-group">
                                            <label>Last Name</label>
                                            <input class="form-control" name="" type="text" name="Name" placeholder="" required="" />
                                        </div> */}
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input class="form-control" name="email" type="text" size="30" placeholder="Type your email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                        </div>
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input class="form-control" name="phone" type="text" size="30" placeholder="Type your phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                                            <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Write Message</label>
                                            <textarea class="form-control" name="message" type="text" size="1000" placeholder="Type your message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}></textarea>
                                            <span style={{color: "red"}}>{this.state.errors["message"]}</span>
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto mt-3">
                                        <button type="submit" class="btn submit">Submit</button>
                                    </div>
                                    {/* <div class="form-group mx-auto mt-3">
                                        <button type="reset" class="btn submit">Reset</button>
                                    </div> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <div class="map-w3layouts">
                    <iframe title="david_kim_salon" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.1403790470686!2d-79.46917088463071!3d43.9978238380955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad32c386bf919%3A0xd5f23c8a43b55de9!2sDavid%20Kim%20Salon%20de%20Beaut%C3%A9!5e0!3m2!1sen!2sca!4v1617919364205!5m2!1sen!2sca" allowfullscreen=""></iframe>
                </div>
	        </div>
        )
    }
}
export default Contact