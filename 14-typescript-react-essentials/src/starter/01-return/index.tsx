// function Component(): JSX.Element | null | string  {
//   return null;
//   return 'hello';
//   return (
//     <div>
//       <h2>React & Typescript</h2>
//       <h2>Return Type</h2>
//     </div>
//   );
// }
// export default Component;



import { type PropsWithChildren } from 'react';

// type ComponentProps = {
//   name: string;
//   id: number;
//   children: React.ReactNode;
// };

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>Name : {name}</h2>
      <h2>ID : {id}</h2>
      {children}
    </div>
  );
}
export default Component;