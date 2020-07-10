import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals, searchResult }) => {
    return(
        <>
            <Header />
            <Search isHome/>
            { 
                Object.keys(searchResult).length > 0 && 
                    (
                        <Categories title="Resultados de la busqueda...">
                            <Carousel>
                                {searchResult.map(item =>
                                    <CarouselItem 
                                    key={item.id} 
                                    {...item}
                                    />
                                )}
                            </Carousel>
                        </Categories>
                    )                        
            }

            <Categories tittle="Tendencias">
                <Carousel>
                        {trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                </Carousel>
            </Categories>

            <Categories tittle="Originales de Platzi Video">
                    <Carousel>
                        {originals.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )}
                    </Carousel>
            </Categories>
        </>
)};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
        searchResult: state.searchResult,
    };
};

export default connect(mapStateToProps, null)(Home);
