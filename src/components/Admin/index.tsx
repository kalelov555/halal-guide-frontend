// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const httpClient = (url:string, options = {} as any) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('Access-Control-Expose-Headers', '*'); //<----see here
  options.headers.set('X-Total-Count', 5); //<----see here
  return fetchUtils.fetchJson(url, options);
};


const dataProvider = jsonServerProvider('http://localhost:3000', httpClient);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="restaurants" list={ListGuesser} />
    <Resource name="hostels" list={ListGuesser} />
  </Admin>
);

export default App;
