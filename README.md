# mds-local-storage

This module provides a simple and easy way to store and retrieve data in LocalStorage. It exports an object called "dataStore" which has the following methods:

## Methods
`set(key, data)`
This method takes two parameters, a key and data. It stringifies the data and stores it in LocalStorage using the provided key.

`get(key)`
This method takes one parameter, a key. It retrieves the data stored in LocalStorage using the provided key, parses it back into a JavaScript object and returns it. If the data does not exist, it returns false.

`push(key, data)`
This method takes two parameters, a key and data. It first retrieves the data stored in LocalStorage using the provided key, parses it back into a JavaScript object. If the data does not exist, it sets the data in LocalStorage using the provided key. If the data exists and is an array, it pushes the new data to the array and updates LocalStorage. If the data exists but is not an array, it returns false.

`addTo(key, innerKey, data)`
This method takes three parameters, a key, innerKey and data. It first retrieves the data stored in LocalStorage using the provided key, parses it back into a JavaScript object. If the data does not exist, it sets the data in LocalStorage using the provided key and innerKey. If the data exists but is not an object, it returns false. If the data exists and is an object, it creates a new key in the object and assigns the provided data to it.

### Usage
Include the script in your HTML file
