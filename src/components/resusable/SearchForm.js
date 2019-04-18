import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { fetchVideos } from "../../actions";

class SearchForm extends React.Component {
  validateSearch(obj) {
    return !obj || Object.keys(obj).length === 0;
  }

  onSubmit = formValues => {
    if (!this.validateSearch(formValues)) {
      this.props.fetchVideos(formValues);
    }
  };

  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui icon input"
        >
          <Field name="term" component="input" placeholder="Search" />
          <i
            onClick={this.props.handleSubmit(this.onSubmit)}
            className="circular search link icon"
          />
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

export default connect(
  mapStateToProps,
  {
    fetchVideos
  }
)(searchReduxForm);
