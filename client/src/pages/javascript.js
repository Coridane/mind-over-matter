// JS for registration

async function registerFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#registerUsername').value.trim();    
    const password = document.querySelector('#registerPassword').value.trim();

    if(username == '' || password == '') {
      new Alert({duration: 5, type: 'error', message: 'Invalid username or password.', close: false});
      return;
    }

    if(password.length < 4 || password.length > 18) {
      new Alert({duration: 5, type: 'error', message: 'The password must be 4-18 characters.', close: false});
      return;
    }
     
    if (username && password) {
      const response = await fetch('/api/users/', {
        method: 'post',
        body: JSON.stringify({
          username,          
          password
        }),
        headers: { 'content-type': 'application/json' } 
      });      
  
      // check the response status
      if (response.ok) {
        console.log('success');
        document.location.replace('/');
      } else {
        new Alert({duration: 5, type: 'error', message: 'Registration failed. Possible cause of error: duplicate user.', close: false});
        return
      }
    }    
}

// JS for login 

async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if(username == '' || password == '') {
      new Alert({duration: 5, type: 'error', message: 'Invalid username or password.', close: false});
      return;
    }  
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'content-type': 'application/json' }
      });      
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        new Alert({duration: 5, type: 'error', message: 'Invalid username or password.', close: false});
      }
    }
  }

  document.querySelector('.signup').addEventListener('submit', registerFormHandler);
  document.querySelector('.login').addEventListener('submit', loginFormHandler);
  