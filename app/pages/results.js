import React, {Component} from 'react';
import Link from 'next/link';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultsList from '../components/ResultsList/ResultsList';

import data from '../mock_data/data';
import '../css/style.css';

class Results extends Component {
  static async getInitialProps({ query }) {
    const qs = query;
    return { qs }
  }

  constructor(props) {
    super(props);
    this.state = {
      results: false,
      postCode: false,
      properties: [],
      result_count: 0,
      area: ''
    };
  }

  resolveSearch(postcode) {
    if (!postcode || postcode==='') {
      this.setState({
        postCode: false
      });
    } else {
      this.setState({
        postCode: postcode
      });

      let processedResults = (data.area === postcode) ? data : false;

      if (processedResults) {
        this.setState({
          results: true,
          properties: data.listing.map(item => ({
            num_bedrooms: item.num_bedrooms,
            agent_address: item.agent_address,
            property_type: item.property_type,
            description: item.description,
            agent_postcode: item.agent_postcode,
            details_url: item.details_url,
            price: item.price,
            agent_name: item.agent_name,
            agent_logo: item.agent_logo,
            agent_phone: item.agent_phone,
            image_url: item.image_url
          })),
          result_count: data.result_count,
          area: data.area
        })
      }
    }
  }

  getListings() {
    this.resolveSearch(this.props.qs.postcode.toUpperCase());
  }

  componentWillMount() {
    this.getListings();
  }

  render() {
    const { postCode, results, properties, result_count, area } = this.state;
    return (
      <div className={`col-12`}>
        <div className={`row flex-nowrap justify-content-between align-items-center text-white rounded bg-dark py-3`}>
          { postCode ? (
              <div className={`col-12`}>Searching in {postCode}</div>
            ) : (
              <div className={`col-12`}>Please return to the{' '}
                <Link href="/search">
                  <a>Search Page</a>
                </Link>{' '}
                and enter a valid postcode to see results.</div>

            )}
        </div>
        <div className={`row mb-2`}>
            { results ? (
              <div className={`col-12`}>
                <div className={`results-count`}>
                  {result_count} properties found
                </div>
                  <ResultsList
                    properties={properties}
                  />
                </div>
            ) : (
              <div className={`col-12`}>
                <div>No results.  Please try a different post code.</div>
                <div className={`col-12`}><SearchBar/></div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default Results;
