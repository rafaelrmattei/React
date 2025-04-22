import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Header, Links, Title, Extras, Content } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import ReactMarkdown from "react-markdown";
import { ptBR } from "date-fns/locale/pt-BR";
import { formatDistanceToNow } from "date-fns";

interface Issue {
  title?: string;
  body?: string;
  updated_at?: Date;
  html_url?: string;
  comments?: number;
  user?: {
    login: string;
  };
}

export function Issue() {
  const navigate = useNavigate();
  const { issueId } = useParams();
  const [issue, setIssue] = useState<Issue>({});

  const getIssue = useCallback(async () => {
    try {
      const response = await api.get(`repos/rafaelrmattei/React/issues/${issueId}`);

      if (response.status === 200) {
        setIssue(response.data);
      }
    } catch {
      navigate("/");
    }
  }, [issueId, navigate]);

  useEffect(() => {
    if (issueId) {
      getIssue();
    } else {
      navigate("/");
    }
  }, [issueId, getIssue, navigate]);

  return (
    <div>
      <Header>
        <Links>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink>
          <NavLink to={issue.html_url ? issue.html_url : "#"} target="_blank">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </NavLink>
        </Links>

        <Title>{issue.title}</Title>

        <Extras>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.user?.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>
              {issue.updated_at &&
                formatDistanceToNow(new Date(issue.updated_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments === 1 ? `${issue.comments} comentario` : `${issue.comments} comentários`}</span>
          </div>
        </Extras>
      </Header>

      <Content>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </Content>
    </div>
  );
}
