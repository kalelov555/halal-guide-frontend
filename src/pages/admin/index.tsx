// in src/admin/App.jsx
// import * as React from "react";
// import { fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
import dynamic from "next/dynamic";

// const httpClient = (url:string, options = {} as any) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count'); //<----see here
//   options.headers.set('X-Total-Count', 5); //<----see here
//   return fetchUtils.fetchJson(url, options);
// };

// const dataProvider = jsonServerProvider('http://localhost:3000', httpClient);

// const Component = <Admin dataProvider={dataProvider}>
// <Resource name="restaurants" list={ListGuesser} />
// <Resource name="hostels" list={ListGuesser} />
// <Resource name="prayer_rooms" list={ListGuesser} />
// <Resource name="products" list={ListGuesser} />
// </Admin>

const AdminPanelComponent = dynamic(() => import('../../components/Admin'), {ssr: false}) 



export default function AdminPanel() {
  return <AdminPanelComponent />
}
