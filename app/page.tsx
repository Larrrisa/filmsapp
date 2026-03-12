import { getFilms } from "@/api/api";

export default function Home() {
  const { filmsData, isFilmsDataLoading } = getFilms(1);
  // const { seriesData, isSeriesDataLoading } = getSeries(1);
  // const { trendingFilmsData, isTrendingFilmsDataLoading } = getTrendingFilms(1);

  return (
     <>
         <h2>
           Popular films
         </h2>
         {/*<Link to="/films">
           <ArrowIconRight />
         </Link>*/}

       <div>
         {isFilmsDataLoading ? (
         <p>Loading....</p>
         ) : (
         <p>Films</p>
         )}
       </div>

     </>
   );
}
