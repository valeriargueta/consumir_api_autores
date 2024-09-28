import React, { useEffect, useState } from 'react';
import './styles.css';  // Importamos los estilos

function App() {
  const [blogs, setBlogs] = useState([]);

  // Llamada al API usando fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.vercel.app/blog');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="blog-container">
      {blogs.map((blog, index) => (
        <div key={index} className="blog-card">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <a href={blog.url} target="_blank" rel="noopener noreferrer">
            Leer más
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;
