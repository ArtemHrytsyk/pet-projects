import React, { PureComponent } from 'react';
import styles from './Tabs.module.css'

class Tabs extends PureComponent {
    state = {
        activeIdx: 0,
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.activeIdx !== this.state.activeIdx //поверне тру або фолс
    // }

    setActiveTabIdx = (idx) => {
        this.setState({
            activeIdx: idx
        });
    };

    render() {
        console.log(`Rerender @ ${Date.now()}`)
        const tab = this.props.items[this.state.activeIdx]
        return (
            <>
                <h1>training of useing PureComponent and shouldComponentUpdate</h1>
                <h1>Click buttons to see some Nissan icons</h1>
                <div>
                    {this.props.items.map(
                        (item, idx) =>
                            <button
                                type='button'
                                key={item.label}
                                onClick={() => this.setActiveTabIdx(idx)}>
                                {item.label}</button>)
                    }
                </div>
                <div>
                    <h2>{tab.label}</h2>
                    <p>{tab.content}</p>
                    <img src={tab.src} alt={`Failed: ${tab.src}`}></img>
                </div>
            </>
        )
    }
}

export { Tabs };