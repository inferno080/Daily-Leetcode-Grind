import submitForm from './submitForm';

export default function App() {
  return (
    <form 
      action="https://questions.greatfrontend.com/api/questions/contact-form" 
      method="post"
      // Ignore the onSubmit prop, it's used by GFE to
      // intercept the form submit event to check your solution.
      onSubmit={submitForm}>
      <div class="inputfield">
        <label for="name">Name</label>
        <input id="name" name="name" type="text"/>
      </div>
      <div class="inputfield">
        <label for="email">Email</label>
        <input id="email" name="email" type="email"/>
      </div>
      <div class="inputfield">
        <label for="message">Message</label>
        <textarea id="message" name="message" type="email"/>
      </div>
      <br/>
      <button type="submit" >Submit</button>
    </form>
  );
}
