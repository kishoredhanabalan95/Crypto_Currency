import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptoQuery  } from '../Services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
    const [cryptos, setCrypto] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filterData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if(isFetching) return <Loader />;

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder="Search Cryptocurrency" onChange={(e) => setSeachTerm(e.target.value)} />
                </div>
            )}
            <div className="search-crypto">
                <Input placeholder="Search Cryptocurrency" onchange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to ={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily: {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies