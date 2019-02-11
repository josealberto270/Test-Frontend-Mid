import React, { Component } from 'react';

// Component
import Header from './Header';
class Content extends Component {
  render() {
    return (
      <div id="content-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>Pokemon ID</th>
                      <th>Nombre del Pokemon</th>
                      <th>Imagen del Pokemon</th>
                      <th>Height</th>
                      <th>Weight</th>
                      <th>Primer movimiento</th>
                      <th>Base_experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
