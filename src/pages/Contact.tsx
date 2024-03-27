import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xoqgkjdv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="p-10 pt-32">
        <h1 className="text-4xl mb-5 text-center">Contact</h1>
        <form className="space-y-5 bg-transparent" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block mb-1">Title</label>
                <input type="text" id="name" name="name" className="w-full p-2 bg-transparent border border-gray-500 rounded text-gray-500" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 bg-transparent border border-gray-500 rounded text-gray-500" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" name="message" rows={5} className="w-full p-2 bg-transparent border border-gray-500 rounded text-gray-500"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="px-5 py-2 bg-blue-500 text-white rounded">Submit</button>
        </form>
    </div>
  );
}

export default Contact;