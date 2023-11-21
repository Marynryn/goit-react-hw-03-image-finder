import React from "react";
import { serviceSeach } from "helpers/helpers";
import { Searchbar } from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export class App extends React.Component {
  state = {
    photos: [],
    query: "",
    page: 1,
    loading: false,
    isVisibleBtn: false,
    loading: false
  }
  getImage = async () => {
    const { query, page } = this.state;
    this.setState({ loading: true });
    try {
      const dataImages = await serviceSeach(query, page);

      this.setState(prevState => ({
        photos: [...prevState.photos, ...dataImages.hits], isVisibleBtn:
          page < Math.ceil(dataImages.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ photos: [] });
    } finally { this.setState({ loading: false }); }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      this.getImage()
    }
  }

  handleSubmit = (query) => {
    this.setState({ query, photos: [], page: 1, isVisibleBtn: false })
  }
  onBtnLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    const { photos, isVisibleBtn, loading } = this.state
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery props={photos} onClick={this.toggleModal} />
        {loading && <Loader />}
        {isVisibleBtn && (
          <Button onClick={this.onBtnLoadMoreClick} />
        )}
      </div >
    );
  };
}
