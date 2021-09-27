import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import apikeys from '../apikeys';
import emailjs from 'emailjs-com'

class Contact extends Component{
    constructor(props){
        super(props);
   
        this.state = {
            username: '',
            email: '',
            phone: '',
            message: '',
            errors: {},

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
                this.onReset();
            },
            error => {
                alert('An error occured, Plese try again', error.text);
            })
        } else {
            alert("Your request is invalid!: please ensure to enter your name, email and appointment date and time that you wish.");
        }
    }

    onReset=()=>{
        this.setState({
            username: '',
            email: '',
            phone: '',
            message: '',
            errors: {}
        });
    }

    handleChange=(e)=>{
        let field_name = e.target.name;
        let field_value = e.target.value;        
        this.setState({[field_name]: field_value});
    }

    handleValidation() {
        let name_value = this.state.username;
        let email_value = this.state.email;
        let phone_value = this.state.phone;
        let message_text = this.state.message;
        let errors = {};
        let formIsValid = true;

        // console.log(name_value === '');
        // console.log(email_value === '');
        // console.log(phone_value === '');
        // console.log(message_text === '');

        //Name
        if(name_value === ''){
           formIsValid = false;
           errors["username"] = "Valid name must be provided";
        } else { 
            if(typeof name_value !== "undefined"){
                // console.log(name_value.match(/^[a-zA-Z ]+$/));
                if(!name_value.match(/[a-zA-Z ]+$/)){
                    formIsValid = false;
                    errors["username"] = "Name should contain only alphabets";
                }        
            }
        }
   
        //Email
        if(email_value === ''){
           formIsValid = false;
           errors["email"] = "Valid email must be provided";
        } else {
            if(typeof email_value !== "undefined"){
                let lastAtPos = email_value.lastIndexOf('@');
                let lastDotPos = email_value.lastIndexOf('.');
     
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email_value.indexOf('@@') === -1 && lastDotPos > 2 && (email_value.length - lastDotPos) > 2)) {
                   formIsValid = false;
                   errors["email"] = "Email is not valid";
                 }
             }
        }

        //Phone
        if(phone_value === ''){
            formIsValid = false;
            errors["phone"] = "Valid phone number must be provided";
        } else {
            if(typeof phone_value !== "undefined"){
                // console.log(phone_value.match(/^[0-9/-/(/) ]+$/));
                if(!phone_value.match(/[0-9/-/(/) ]+$/)){
                   formIsValid = false;
                   errors["name"] = "Name should contain only alphabets";
                }        
             }
        }
        
        //Message
        if(message_text === ''){
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
                                <div class="row">
                                    <div class="col-md-6">
                                        <img class="sanity" src="/assets/images/sanitization_note_v1.jpg" alt=" "></img>
                                        <div class="blank-space"></div>
                                    </div>                                    
                                    <div class="col-md-6">
                                        <img class="sanity" src="/assets/images/sanity_shop_v1.jpg" alt=" "></img>
                                    </div>                                    
                                </div>
                                <div class="blank-space"></div>
                                <p>No walk-in please. All of our services are provided by appointment ONLY.</p>
                                <div class="blank-space"></div>
                                {/* <div class="wish-block">
                                    <p class="wish-note">For <a href="https://www.wish.com/local">Wish</a> pickup customers, 
                                    please pick up your package only from Monday to Wednesday between 11AM and 2PM.</p>
                                </div> */}
                                <div class="blank-space"></div>
                                <p>Please comply with COVID-19 rules for any visit.</p>
                            </h4>
                        </div>
                        <div class="contact-w3pvt-form mt-5">
                            <form action="#" class="w3layouts-contact-fm" method="post" onSubmit={this.onSubmit} onReset={this.onReset}>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input class="form-control" name="username" type="text" size="30" placeholder="Type your name" onChange={this.handleChange} value={this.state.username}/>
                                            <span style={{color: "red"}}>{this.state.errors["username"]}</span>
                                        </div>
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input class="form-control" name="email" type="text" size="30" placeholder="Type your email" onChange={this.handleChange} value={this.state.email}/>
                                            <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                        </div>
                                        <div class="form-group">
                                            <label>Phone</label>
                                            <input class="form-control" name="phone" type="text" size="30" placeholder="Type your phone" onChange={this.handleChange} value={this.state.phone}/>
                                            <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label>Write Message</label>
                                            <textarea class="form-control" name="message" type="text" size="1000" placeholder="Type your message" onChange={this.handleChange} value={this.state.message}/>
                                            <span style={{color: "red"}}>{this.state.errors["message"]}</span>
                                        </div>
                                    </div>
                                    <div class="form-group mx-auto mt-3">
                                        <div class="row">
                                            <button type="submit" class="btn submit submit-align">Submit</button>
                                            <button type="reset" class="btn submit reset-align">Reset</button>                                                
                                        </div>
                                    </div>
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