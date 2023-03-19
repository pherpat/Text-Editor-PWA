import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('put to the database');

  // create a connection to the dtabase and vesion we want to use.
  const contactDb = await openDB ('jate', 1);

  // create a new transaction and specify the database and data privileges.
  const tx = contactDb.transaction('jate', 'readwrite');

  //open up the desire object store.
  const store = tx.objectStore('jate');

  // use the .add() method on the store and pass n the content 
  const request = store.put({ id: 1, value: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database
// Export a function we will use to GET all from the database.
export const getDb = async () => {
  console.log('Get from the database');

  // create a connection to the database and version we want to use 
  const contactDb = await openDB('jate', 1);

  // vreate a new transaccion and specify the database and data privileges. 
  const tx = contactDb.transaction('jate', 'readonly');

  // open up the desired object store
  const store = tx.objectStore('jate');

  // use the .getAll() method to get al data in the database
  const request = store.getALL();

  // get confirmatoin of the request 
  const result = await request;
  console.log('result.value', result);
  return result;

};

initdb();
