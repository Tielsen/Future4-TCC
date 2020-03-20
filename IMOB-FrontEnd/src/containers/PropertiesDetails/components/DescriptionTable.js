import React from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DescriptionTable = (props) => {

    function createData(name, data) {
        return { name, data};
    }

    const rows = [
        createData('Features', props.features),
        createData('Listing ID', props.id),
        createData('Lot Size', props.lot ),
        createData('Parking Type', props.parking),
        createData('Room Count', props.room),
        createData('Roof Type', props.roof),
        createData('View Type', props.view),
        createData('Exterior Type', props.exterior),
    ];

    return (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Property details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    )
}

const mapStateToProps = state =>{
    return({
        features: state.properties.details.features,
        id: state.properties.details.id,
        lot: state.properties.details.lot,
        parking: state.properties.details.parking,
        room: state.properties.details.room,
        roof: state.properties.details.roof,
        view: state.properties.details.view,
        exterior: state.properties.details.exterior,
    })
}


export default connect(mapStateToProps, null)(DescriptionTable)