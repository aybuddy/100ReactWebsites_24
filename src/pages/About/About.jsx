import React from 'react';
import Layout from '../../components/layout/Layout';
import './About.css';

const About = () => {
  return (
    <Layout>
      <div className='con-h'>
        <div className='con618 '>
          <img
            className='fullImage'
            src='https://images.unsplash.com/photo-1624382085340-6df4bfc36cba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt=''
          />
        </div>
        <div className='con382 con382-end'>
          <h2>Page 2 Small Headline</h2>
        </div>
      </div>
      <div className='con-h'>
        <div className='con382'>
          <h2>Page 2 Small Headline</h2>
        </div>
        <div className='con618 '>
          <img
            className='fullImage'
            src='https://images.unsplash.com/photo-1624382085340-6df4bfc36cba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            alt=''
          />
        </div>
      </div>
      <div className='con-h'>
        <div className='con618'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            consectetur sunt veniam eius ratione aspernatur minus, obcaecati
            quisquam! Reprehenderit possimus ad fuga at praesentium, nobis
            accusamus sequi magni quasi porro. Rem vel architecto blanditiis
            laborum esse velit et suscipit quisquam? Laborum eaque ipsam nisi
            quasi quae delectus sit, similique nam, nostrum sequi expedita,
            maxime neque cupiditate id reiciendis fugit ullam.
          </p>
        </div>
        <div className='con382'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            aut omnis vel nisi. Perferendis sed unde quis quasi, nulla
            cupiditate ab fugiat, dolorem in modi harum qui quam saepe totam?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
