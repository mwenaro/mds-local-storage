var dataStore = {
    set: function (key, data) {
      window.localStorage.setItem(key, JSON.stringify(data));
    },
    get: function (key) {
      //Will return the requested data if it exists, otherwise will return false
      return JSON.parse(window.localStorage.getItem(key)) || false;
    },
    push: function (key, data) {
      //This method pushes 
      var storedData = this.get(key);
      if (!storedData) {
        this.set(key, data);
        return true;
      }
  
      //Check if it's an array
      if (Object.prototype.toString.call(storedData) === '[object Array]') {
        storedData.push(data);
        this.set(key, storedData);
        return true;
      }
  
      return false;
    },
    addTo: function (key, innerKey, data) {
      var storedData = this.get(key);
      if (!storedData) {
        var obj = {};
        obj[innerKey] = data;
        this.set(key, obj);
        return true;
      }
  
      //If key exists, lets update the object
      if (typeof storedData === 'object') {
        storedData[innerKey] = data;
        this.set(key, storedData);
        return true;
      }
      return false;
    }
  };
  
 window.dataStore = dataStore;
  