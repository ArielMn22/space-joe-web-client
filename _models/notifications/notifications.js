class Notifications {
    constructor() {
      this.notificationElement = null;
    }
  
    show(message) {
      // Cria o elemento da notificação
      this.notificationElement = document.createElement('div');
      this.notificationElement.classList.add('notification');
      this.notificationElement.textContent = message;
  
      // Define a posição da notificação no canto superior direito
      this.notificationElement.style.position = 'fixed';
      this.notificationElement.style.top = '35px';
      this.notificationElement.style.right = '10px';
  
      // Adiciona o elemento à página
      document.body.appendChild(this.notificationElement);
  
      // Remove a notificação após 1500ms
      setTimeout(() => {
        this.hide();
      }, 1500);
    }
  
    hide() {
      // Remove o elemento da notificação da página
      if (this.notificationElement && this.notificationElement.parentNode) {
        this.notificationElement.parentNode.removeChild(this.notificationElement);
        this.notificationElement = null;
      }
    }
  }
  