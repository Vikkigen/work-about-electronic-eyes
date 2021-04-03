import React, { Component} from 'react';
import './ContactStyles.css';

/**In this component Contact we have paragraphs with contact info what will help to clients when they will have questions */
 class Contact extends Component{
  render() {
      return(
        <div>
          <p></p>
          <p className="paragraphContact">
         If you have questions or would like to order one of our prodcts please contact us by e-mail:
          </p>
          <p>electroniceyesai@gmail.com</p>
          <p></p>
        </div>
      )

  }
}

export default Contact;
