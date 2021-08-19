import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import classes from './styles.module.scss';

const HotCategories = ({title, categories}) => {
    console.log(categories);
    const history = useHistory();
    const getcourseByCategory = (category_id, category_name)=>{
        history.push({
            pathname:  "/course-of-category",
            state:{
                category_id: category_id,
                category_name: category_name,
            },
        })
    }
    return (
        <Fragment>
            <h3 className={classes.title}>{title}</h3>
            <section className={classes.catList}>
                {categories.map(category => (
                    <div 
                        className={`card ${classes.categoriCard}`} 
                        onClick={() => getcourseByCategory(category.id, category.category_name)}
                        key={category.id}
                    >
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
