import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EmployeeForm from './EmployeeForm';
import { PageHeader, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EmployeeActions from '../../actions/EmployeeActionCreator';
import { withRouter } from 'react-router';

class EmployeesDetail extends Component {
  // TODO - implement me
  constructor(props) {
    super(props);
  
    const id = props.match.params._id;
    props.actions.getEmployee(id);
  
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(employee){
    this.props.actions.updateEmployee(employee).then(() => {
      this.props.history.push('/employees');
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>Employees Detail</PageHeader>
        </Row>
        <Row>
          <EmployeeForm employee={this.props.employee} actions={this.props.actions} handleSave={this.handleSave}/>
        </Row>
      </Grid>
    );
  }
}

EmployeesDetail.defaultProps = {
  employee: {}
};

EmployeesDetail.propTypes = {
  //TODO: require the employee object here
  employee: PropTypes.object.isRequired,
  history: PropTypes.object
};

const mapStateToProps = state => {
  return {
    //TODO: map the redux store state to the component props here
    employee: state.employees.employee
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //TODO: bind the action creators here
    actions: bindActionCreators(EmployeeActions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeesDetail));
