<template>
  <div class="card shadow radius my-3">
    <div class="card-body">
      <div class="card__header row">
        <div class="card__header__logo col-md-2 text-left">
          <avataaars></avataaars>
        </div>
        <div class="card__header__meta col-md-7">
          <h2 class="card__header__meta__title h3 text-left">
            Lavage de la plage de Dunkerque
          </h2>
          <div class="card__header__meta__title__kpis">
            <div class="card__header__meta__title__kpi">
              <img src="~/assets/img/map.png" alt="" />
              <h3>Dunkerque</h3>
            </div>
            <div class="card__header__meta__title__kpi">
              <img src="~/assets/img/calendar.png" alt="" />
              <h3>16 Décembre 2022</h3>
            </div>
          </div>
        </div>
        <div class="card__header__submeta col-md-3">
          <h4>3 participants</h4>
          <h5>10 per. Max</h5>
        </div>
      </div>
      <div class="card__content">
        <p>
          Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla
          quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div class="card__footer">
          <b-row>
            <b-col cols="8">
              <b-row>
                <div class="card__footer__category">
                  <p>Humanitaire</p>
                </div>
                <div class="card__footer__category">
                  <p>Sport</p>
                </div>
                <div class="card__footer__category">
                  <p>Voyage</p>
                </div>
              </b-row>
            </b-col>
            <b-col cols="4" class="text-right">
              <a href="#" class="btn btn-secondary">Rejoindre le projet</a>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avataaars from "vuejs-avataaars";

export default {
  components: {
    Avataaars
  }
};
</script>

<style lang="scss">
.card {
  &__header {
    color: $dark;
    display: flex;
    align-items: center;
    &__logo {
      svg {
        width: 100px;
        height: 100px;
      }
    }
    &__meta {
      &__title {
        &__kpis {
          display: flex;
        }
        &__kpi {
          margin-right: $spacer * 2;
          margin-top: $spacer * 0.5;
          display: flex;
          align-items: center;
          & h3 {
            margin: 0;
            color: $grey;
            font-size: 18px;
            font-weight: 300;
          }
          & img {
            margin-right: $spacer;
            width: 25px;
            height: 25px;
          }
        }
      }
    }
    &__submeta {
      text-align: right;
      padding-right: $spacer * 2;
      h4 {
        font-size: 16px;
        font-weight: bold;
      }
      h5 {
        font-size: 14px;
        line-height: 5px;
      }
    }
  }

  &__content {
    width: 80%;
    margin: 2rem auto;
    color: #2c3e50;
    & p {
      text-align: left;
    }
  }

  &__footer {
    margin-top: $spacer * 2;
    &__category {
      background: #a29bfe48;
      padding: $spacer * 0.5;
      margin-right: $spacer * 1.25;
      border-radius: $spacer * 0.5;
      & p {
        color: #6c288a;
        margin: 0;
      }
    }
  }
}
</style>
