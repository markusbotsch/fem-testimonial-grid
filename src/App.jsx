import './App.css'
import { data } from './data.jsx';

import Testimonial from './components/Testimonial';

function App() {

  const testimonials = data.map(testimonial => 
    <Testimonial 
      name={testimonial.name} 
      image={testimonial.image}
      headline={testimonial.headline}
      copy={testimonial.copy}
    />
  )

  return (
    <>
    <main>
        <div className="testimonial-grid">
          {testimonials}
        </div>
    </main>
    <footer>
      created by <a href="https://www.markusbotsch.com">Markus Botsch</a>
    </footer>
    </>
  )
}

export default App
