
type BasicProp = {
  type: 'basic';
  name: string;
}

type AdvancedProp = {
  type: 'advanced';
  name: string;
  email: string  
}


function Component(user: BasicProp | AdvancedProp) {

  const {type,name} = user

  if (type === 'basic') {
    return (
    <section>
      <div className='alert alert-success'>
        <h1>user: {name}</h1>
      </div>
    </section>
  );
  }
  else {
    return (
    <section>
      <div className='alert alert-danger'>
        <h1>user: {name}</h1>
        <h1>email: {user.email}</h1>
      </div>
    </section>
  );}
}
export default Component;
