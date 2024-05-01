// // export default function Page() {
// //   return <p>Customers Page</p>;
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import { fetchCustomers } from '@/app/lib/data';

// export default function Page() {
//   const [customers, setCustomers] = useState<any[]>([]);

//   useEffect(() => {
//     const getCustomers = async () => {
//       try {
//         const customers = await fetchCustomers();
//         setCustomers(customers);
//       } catch (error) {
//         console.error('Error fetching customers:', error);
//       }
//     };

//     getCustomers();
//   }, []);

//   return (
//     <div>
//       <h1>Customers</h1>
//       <ul>
//         {customers.map((customer) => (
//           <li key={customer.id}>{customer.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import {  fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

export default async function Page() {
  const customers = await fetchFilteredCustomers();

  return <CustomersTable customers={customers} />;
}
