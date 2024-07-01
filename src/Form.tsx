import React from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>Formulário de Contato</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input 
              id="name"
              {...register('name', { required: true })}
            />
            {errors.name && <span>Este campo é obrigatório</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              id="email"
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && <span>Este campo é obrigatório</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input 
              id="phone"
              type="tel"
              {...register('phone', { required: true })}
            />
            {errors.phone && <span>Este campo é obrigatório</span>}
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
