import { Link } from "react-router";
import { drinks } from "../data/drinks";
import { useFavoriteStore } from "../stores/useFavoriteStore";

export default function FavoritesPage() {
  const favoriteIds = useFavoriteStore((state) => state.favoriteIds);
  const clearFavorites = useFavoriteStore((state) => state.clearFavorites); // ✅ 추가

  const favoriteDrinks = drinks.filter((drink) =>
    favoriteIds.includes(drink.id),
  );

  return (
    <main>
      <h1>찜한 메뉴</h1>

      {favoriteDrinks.length === 0 ? (
        <p className="empty">
          아직 찜한 메뉴가 없어요.
          <br />
          <Link to="/">전체 메뉴 보러 가기</Link>
        </p>
      ) : (
        <>
          <button className="clear-button" onClick={clearFavorites}>
            전체 찜 해제
          </button>

          <div className="favorite-list">
            {favoriteDrinks.map((drink) => (
              <Link key={drink.id} to={`/drinks/${drink.id}`}>
                {drink.title}
                <span>♥</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}