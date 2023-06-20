import React, { useState } from 'react';
import PokeCard from './PokeCard';
import ReactPaginate from 'react-paginate';

const PokeContainer = ({ pokemons }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPokeData = pokemons?.slice(startIndex, endIndex);

    const pageCount = pokemons && pokemons.length > 0 ? Math.ceil(pokemons.length / itemsPerPage) : 0;



    return (
        <>
            <div className='contenedorCard'>
                {currentPokeData?.map((pokemon) => (
                    <PokeCard key={pokemon.url} url={pokemon.url} />
                ))}
            </div>

            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </>
    );
};

export default PokeContainer;
