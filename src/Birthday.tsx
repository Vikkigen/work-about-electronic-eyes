import React, { Component } from 'react';
import './BirthdayStyles.css';
import {ThemeContext} from './theme-context';
/**
 * This component class Birthday have a title and some paragraphs 
 * Here we can see prices of congratulating by a cartoon at Birthday
 */

class Birthday extends Component {
  render() {
    return (
      <div>
        <p></p>
      <h2>Birthday Present</h2>
      <p>Just imagine how your child or friend will be happy if he/she will be congratulated by a cartoon heroe in Youtube.</p>
     <p>It will be really cool!</p>
     <p>Contact us and it will be done just for 10$.</p>
     <p></p>
      </div>
    /*<div>
               Language: {this.context.lang}
              
<div>
    <form action="/backend/upload" enctype="multipart/form-data" method="post">
      <label for="category">Category</label>
      <div><input name="category" id="category" type="text" placeholder="category"/></div>
      <div><input type="file" name="file-to-upload"/></div>
      <div><input type="submit" value="Upload"/></div>
    </form>
</div>
           </div>*/
           );
  }
}

Birthday.contextType = ThemeContext

export default Birthday;
