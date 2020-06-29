import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { directorsQuery } from "./queries";
import { styles } from "./styles";
import { graphql } from "react-apollo";

export default compose(withStyles(styles), graphql(directorsQuery));
