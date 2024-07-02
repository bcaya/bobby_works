import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/StylesMain'
import { fetchFromDiscogs } from './utils'

export default function Records(){
  const [records, setRecords] = React.useState([])
  const [sortOption, setSortOption] = React.useState('');
  const [error, setError] = React.useState(null)
  const [filteredRecords, setFilteredRecords] = React.useState([]);
  const [loading, setLoading] = React.useState(null)
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
   
    async function loadRecords(){
      setLoading(true)
      try{
        const data = await fetchFromDiscogs()
        setRecords(data.data.releases)
        setFilteredRecords(data.data.releases)
      }catch(err){
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadRecords()
   
  },[])
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
function handleChange(e) {
  setQuery(e.target.value);

        // Filter items based on search query
        const filtered = records.filter((record) =>
          record.basic_information.title.toLowerCase().includes(query.toLowerCase()) ||
        record.basic_information.artists[0].name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredRecords(filtered);
      };
function handleSortChange(e) {
  setSortOption(e.target.value);
  sortRecords(e.target.value);
}
function sortRecords(option) {
  const sortedRecords = [...filteredRecords];
  switch (option) {
    case 'artist':
      sortedRecords.sort((a, b) => a.basic_information.artists[0].name.localeCompare(b.basic_information.artists[0].name));
      break;
    case 'album':
      sortedRecords.sort((a, b) => a.basic_information.title.localeCompare(b.basic_information.title));
      break;
    case 'date-added':
      sortedRecords.sort((a, b) => new Date(b.date_added) - new Date(a.date_added));
      break;
    case 'release-date':
      sortedRecords.sort((a, b) => new Date(b.basic_information.year) - new Date(a.basic_information.year));
      break;
    default:
      break;
  }
  setFilteredRecords(sortedRecords);
}
return(
<box-l  borderWidth="0">
  <stack-l space="var(--s-5)">
    <center-l>
    <h1 className="records-header">My Record Collection</h1>
    <p><span className="records-subheader">Using data from the Discogs API</span></p>


<input
  type="text"
  placeholder="Search..."
  value={query}
  onChange={handleChange}
/>
<form >
  <label htmlFor="sorting">Sort By</label>
  <select name="sorting-option" id="sorting-options" onChange={handleSortChange}>
  <option value="">Select an option</option>
    <option value="artist">Artist</option>
    <option value="album">Album</option>
    <option value="date-added">Date Added to Collection</option>
    <option value="release-date">Release Date</option>
  </select>
</form>

    </center-l>
   

  
  </stack-l>
  <box-l borderWidth="0" padding="var(--s1)">
  <grid-l space="var(--s-4)" min="calc(var(--measure) / 4)">
    {filteredRecords.map((record) => (
  <box-l borderWidth="0" padding="var(--s-3)" key={record.id}>
      <div>
        <Link to={`/records/${record.basic_information.id}`}
              state={{recordData: record.basic_information,
                      dateAdded: record.date_added,
                      id: record.basic_information.id
              }}>
        <frame-l ratio="1:1"><img src={record.basic_information.cover_image} alt={record.basic_information.title}/></frame-l>
        </Link>
      </div> 
  </box-l>  
  ))}
  </grid-l>
  </box-l>
</box-l>

)
}