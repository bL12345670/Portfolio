
      
        const background = document.querySelector('.background-animation');
        for (let i = 0; i < 20; i++) {
            const div = document.createElement('div');
            div.style.left = `${Math.random() * 100}%`;
            div.style.animationDuration = `${5 + Math.random() * 10}s`;
            div.style.animationDelay = `${Math.random() * 10}s`;
            background.appendChild(div);
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            const modal = document.getElementById('modal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault(); 
        
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            const formStatus = document.getElementById('form-status');
        
          
            if (!name || !email || !subject || !message) {
                formStatus.textContent = "Please fill out all fields.";
                formStatus.style.color = "red";
                return;
            }
        
            
            formStatus.textContent = "Sending your message...";
            formStatus.style.color = "#ffcc00";
        
            setTimeout(() => {
              
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.style.color = "violet";
        
               
                document.getElementById('contact-form').reset();
            }, 2000);
        });
        

        








        