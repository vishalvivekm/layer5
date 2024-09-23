import styled from "styled-components";

const EventSinglePageWrapper = styled.div`
    .single-event-block{
        p+p{
            margin-top: 1.75rem;  
        }  
    }
  .event-info-block {
    .tags {
      display: flex;
      flex-direction: column;

      .content-wrapper {
        order: 1;
      }

      .register-form {
        order: 2;
        margin-top: 2rem;
      }
    }
  }
    div.event-title {
        text-align: center;
        margin-bottom: 4rem;
        h3 {
        color:black;
        }
    }
    ul.speakers {
        margin-left:0px;
        padding-left:0px;
    }
    li.speakers {
        margin-left: 2rem;
    }


    .thank-you-box {
        margin: 1rem 0 1rem 2rem;
        max-width: 20rem;
        float: right;
    }

  .form-body{
    float: right;
    margin: 1rem 0 1rem 2rem;
  }
  @media (min-width: 771px) {
    .event-info-block {
      .tags {
        flex-direction: row;

        .content-wrapper {
          flex: 1;
          order: 1;
        }

        .register-form {
          order: 2;
          margin-left: 0.5rem;
          max-width: 25rem;
        }
      }
    }
  }


  @media (max-width: 770px) {
        .thank-you-box, .form-body{
            float: none;
            margin: 1rem 0;
            max-width: 100%;
        }           
    }

`;

export default EventSinglePageWrapper;
