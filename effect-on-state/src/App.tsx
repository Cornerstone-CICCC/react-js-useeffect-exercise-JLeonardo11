import { useState, useEffect } from 'react';
import {Toaster, toast}from 'react-hot-toast'

const App = () => {

  <div><Toaster /></div>

  const [message,] = useState('');

  useEffect(() => {
    if (message) {
      console.log(message);
    }
  }, [message]);

  const handleSendMessage = () => {
    toast.success('Hello from React!');
  };

  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (likes > 0) {
      toast.success(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const [color, setColor] = useState<'red' | 'blue'>('red');

  useEffect(() => {
    toast.success(`Color changed to ${color}`);
  }, [color]);

  const handleChangeColor = () => {
    setColor((prev) => (prev === 'red' ? 'blue' : 'red'));
  };

  return (
    <>
        <div><Toaster /></div>

    <div style={{ padding: '2rem' }}>
      {/**Message Logger */ }
      <h2>Message Logger</h2>
      <button onClick={handleSendMessage}>Send Message</button>

      {/**  Like Counter */}
      <h2>Like Counter</h2>
      <button onClick={handleLike}>Like</button>

      {/**  Color Box */}
      <h2>Color Box</h2>
      <button onClick={handleChangeColor}>Change Color</button>
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          marginTop: '1rem',
        }}
      >
        Color Box
      </div>
    </div>
 </> );
};

export default App;

