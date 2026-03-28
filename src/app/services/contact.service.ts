import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import emailjs from '@emailjs/browser';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  recipientEmail?: string;
  messageId?: string;
}

// Replace these with your actual EmailJS credentials from https://emailjs.com
const EMAILJS_SERVICE_ID  = 'service_bv1o5wk';
const EMAILJS_TEMPLATE_ID = 'template_kw3tzmq';
const EMAILJS_PUBLIC_KEY  = 'VsDoulk8OfbFxYm4U';

@Injectable({ providedIn: 'root' })
export class ContactService {

  sendMessage(data: ContactForm): Observable<ContactResponse> {
    const templateParams = {
      from_name:    data.name,
      from_email:   data.email,
      subject:      data.subject,
      message:      data.message,
      to_email:     'phadatarepranali116@gmail.com', // your email — recipient
    };

    return from(
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
    ).pipe(
      map(response => {
        // response.status === 200 means delivered
        // response.text contains the EmailJS message ID
        console.log('Delivered to: phadatarepranali116@gmail.com');
        console.log('EmailJS response:', response.status, response.text);

        return {
          success: true,
          message: 'Message sent successfully!',
          recipientEmail: 'phadatarepranali116@gmail.com',
          messageId: response.text,
        } as ContactResponse;
      })
    );
  }
}
