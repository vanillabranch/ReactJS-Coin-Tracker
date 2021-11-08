import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins,setCoins] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json)=>{
                setCoins(json);
                setLoading(false);
            });
    },[]); //감지하라고 아무것도 지정하지 않았기때문에 무조건 1회만 실행된다는거 잊지말자
    return (
        <div>
            {/*삼항 연산자를 이용하여 컴포넌트나 값을 보여주고, 안보여주고..잘 기억하자 */}
            <h1>The Coins!  {loading ? "" : `(${coins.length})`} </h1>
            {loading ? <strong>Loading...</strong> :
                <select>{/*map에서 함수선언하는거, 중괄호 말고 소괄호다. 그리고 key값을 id다. 반드시 입력할것!*/}
                    {coins.map((coin)=>(
                        <option key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
                    ))}
                </select>
            }
        </div>
    );
}

export default App;
