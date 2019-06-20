import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { fetchVideos } from "../../actions";
import "./SearchForm.css";
import SearchIcon from "@material-ui/icons/Search";

class SearchForm extends React.Component {
  validateSearch(obj) {
    return !obj || Object.keys(obj).length === 0;
  }

  onSubmit = formValues => {
    if (!this.validateSearch(formValues)) {
      this.props.fetchVideos(formValues);
      this.props.history.push(`/results/${formValues.term}`);
    }
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="search-form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <div className="search-container">
            <div className="search-icon">
              <SearchIcon onClick={this.props.handleSubmit(this.onSubmit)} />
            </div>
            <div className="search-wrapper">
              <Field
                className="input-box search-input"
                name="term"
                component="input"
                placeholder="Search"
                autoComplete="off"
              />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const searchReduxForm = reduxForm({
  form: "searchForm",
  destroyOnUnmount: false
})(SearchForm);

const mapStateToProps = state => {
  return {
    items: state.searchVideos.items
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchVideos }
  )(searchReduxForm)
);
