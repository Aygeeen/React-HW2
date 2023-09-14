import React from 'react';

class Blocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRed: true,
            isBlue: true,
        };
    }

    blocksSwitch = () => {
        this.setState({
            isRed: !this.state.isRed,
            isBlue: !this.state.isBlue,
        });
    };

    render() {
        const {isRed, isBlue} = this.state;

        const redSquareClass = isRed ? 'red-square' : 'blue-square';
        const blueSquareClass = isBlue ? 'blue-square' : 'red-square';
        return (
            <div>
                <div
                    className={redSquareClass}
                    onClick={this.blocksSwitch}
                ></div>
                <div
                    className={blueSquareClass}
                    onClick={this.blocksSwitch}
                ></div>
            </div>
        );
    }
}

export default Blocks;