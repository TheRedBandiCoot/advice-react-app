import { Error } from './Error';
import { Loading } from './Loading';
import divider from './assets/pattern-divider-desktop.svg';
import dice from './assets/icon-dice.svg';
import useQuote from './useQuote';
import { animated, useSpring } from '@react-spring/web';
const API_URL = 'https://api.adviceslip.com/advice';

function App() {
  const { isLoading, isError, quote, getQuotes } = useQuote(API_URL);
  const [styles, api] = useSpring(
    () => ({
      x: 0,
      rotateZ: 0,
    }),
    []
  );

  const handleQuotesGenerator = () => {
    getQuotes();
  };

  const debounce = (callback, delay) => {
    let timeOutId;
    return function (...args) {
      api.start({
        to: [
          { x: 0, rotateZ: 360 },
          { x: 0, rotateZ: 0 },
        ],
      });
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
  const debounceHandleQuotesGenerator = debounce(handleQuotesGenerator, 1000);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <>
      <div className="main">
        <article>
          <div>{quote && <p>ADVICE #{quote?.slip?.id}</p>}</div>

          <div>{quote && <p>“{quote?.slip?.advice}”</p>}</div>
        </article>

        <div className="divider">
          <img src={divider} alt="" />
        </div>
      </div>
      <animated.button
        className="dice"
        style={{
          ...styles,
          cursor: 'pointer',
        }}
        onClick={debounceHandleQuotesGenerator}
      >
        <img src={dice} alt="" />
      </animated.button>
    </>
  );
}

export default App;
