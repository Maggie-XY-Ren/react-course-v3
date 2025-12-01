import { useState } from "react";

type Person = {
  name: string;
}

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  // for 'onChange', can use either a. the inline function or b. this function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData) // 没有具体的数据
    // 下面那个也ok
    // const formData = new FormData(e.currentTarget as HTMLFormElement)
    // 需要通过下面的得到表格里的数据
    const data = Object.fromEntries(formData);
    // 或者
    // const text = formData.get('text') as string; //这里的text是input的name
    // const person: Person = { name: text }
  }

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="form-input mb-1"
            name="text"
            value={text}
            // a.
            onChange={(e) => setText(e.target.value)} />
          <input
            type="email"
            className="form-input mb-1"
            name="email"
            value={email}
            // b.
            onChange={handleChange} />
          <button className="btn btn-block">
            submit
          </button>
        </form>
      </section>
    </div>

  );
}
export default Component;
