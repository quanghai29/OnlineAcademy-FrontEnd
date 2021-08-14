import React, { Fragment } from 'react'
import classes from './styles.module.scss';

const HotCategories = ({title, categories}) => {
    return (
        <Fragment>
            <h3 className={classes.title}>{title}</h3>
            <section className={classes.catList}>
                {categories.map(category => (
                    <div key={category.id} className={`card ${classes.categoriCard}`}>
                        <div className="card-content">
                            <h6 className={classes.content}>{category.category_name}</h6>
                        </div>
                    </div>
                ))}
            </section>
        </Fragment>
    )
}

export default HotCategories
