import { useContext } from 'react';
import { FavoritesContext } from '../../components/FavouritesContext/FavouritesContext';
import style from './Favorites.module.scss';
import cn from 'classnames';
import { ProductList } from '../../components/ProductList';

export const FavoritesPage: React.FC = () => {
  const { favoriteItems, totalFavCount } = useContext(FavoritesContext);

  return (
    <main className={cn(style['favorites-page'], {
      [style['favorites-page--empty']]: !favoriteItems.length})}
    >
      <div className={style['favorites-page__container']}>
        
        <h1 className={style['favorites-page__title']}>
          Favourites
        </h1>
        <span className={style['catalog-layout__total']}>
          {`${totalFavCount} models`}
        </span>
        <ProductList products={favoriteItems} />

      </div>
    </main>
  );
};