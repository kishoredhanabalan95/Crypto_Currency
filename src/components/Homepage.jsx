import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistics  } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptoQuery } from '../Services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import Loader from './Loader';

const { Title } = Typography; 

const Homepage = () => {
    const { data, isFetching } = useGetCryptoQuery(10);
    const globalStats = data?.data?.stats; 

    console.log(data);

    if(isFetching) return <Loader />;
     
    return (
        <>
            <Title level={2} className="heading">Global Crypto Status</Title>
            <Row>
                <Col span={12}><Statistics title="Total Cryptocurrencies" values={globalStats.total} /></Col>
                <Col span={12}><Statistics title="Total Exchanges" values={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistics title="Total Market Cap" values={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistics title="Total 24h volume" values={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistics title="Total Markets" values={millify(globalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link>Top 10 Cryptocurrencies in the world</Title>
            </div>
            <Cryptocurrencies simplified />
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link>Top 10 Cryptocurrencies in the world</Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage