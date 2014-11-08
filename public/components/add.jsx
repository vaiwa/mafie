/**
 * @jsx React.DOM
 */

var React = require('react')

var Add = React.createClass({

    render: function() {
        return (
            <div>
            <nav className="navbar navbar-inverse navbar-static" role="navigation">
                <div className="container">

                    <a className="navbar-brand" href="#">Zahrajeme.cz</a>


            <ul className="nav navbar-nav pull-right">
                <li>
                    <a href="#">
                        <div className="add_entry__link">
                            <div className="entry_text">Vyberte umístění aktivity na mapě</div>
                                <span className="add__icon glyphicon glyphicon-screenshot"></span>
                            </div>
                    </a>
                </li>
            </ul>
        </div>


        </nav>
            <div id="map"></div>
            <div className="container">
                <div className="row">
                    <div className="list_group__box--offer list-group">
                        <div className="list-group-item">
                        <h4 className="offer_title">Vytvořit aktivitu</h4>
                            <div className="col__list col-xs-6 col-sm-6">
                                    <select className="form-control">
                                    <option>Sport</option>
                                    <option>Tenis</option>
                                    <option>Osadnici z Katanu</option>
                                    <option>Šachy</option>
                                    <option>Badminton</option>
                                </select>
                            </div>
                        <div className="offer-primary-field"></div>
                    <div className="col__list col-xs-6 col-sm-6">
                    <input className="form-control" type="text" placeholder="Datum"/>
                </div>
            <div className="clearfix"></div>
            <div className="offer-filed--divider"></div>
            <div className="col__list col-xs-6 col-sm-6">
                <input className="form-control" type="text" placeholder="Kontakt"/>
            </div>
            <div className="col__list col-xs-6 col-sm-6">
                <input className="form-control btn btn-success" type="submit" value="Vložit"/>
            </div>
            <div className="clearfix"></div>
            </div>
        </div>
        </div>
        </div>

        </div>
        )
    }

})

module.exports = Add