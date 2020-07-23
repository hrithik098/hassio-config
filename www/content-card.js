class ContentCardExample extends HTMLElement {
    set hass(hass) {
      if (!this.content) {
        const card = document.createElement('ha-card');
        card.header = 'Example card';
        this.content = document.createElement('div');
        // this.content.style.padding = '0 16px 16px';
        // card.appendChild(this.content);
        // this.appendChild(card);
      }
  
      // const entityId = this.config.entity;
      // const state = hass.states[entityId];
      // const stateStr = state ? state.state : 'unavailable';
  
      this.content.innerHTML = `
        
        
  <form> <label>First name:</label><br> <input type="text" id="fname"><br>
  <input type="submit"></form> <h1> {{ fname }} </h1>
      `;
    }
  
    // setConfig(config) {
    //   if (!config.entity) {
    //     throw new Error('You need to define an entity');
    //   }
    //   this.config = config;
    // }
  
    getCardSize() {
      return 3;
    }
  }
  
  customElements.define('content-card-example', ContentCardExample);