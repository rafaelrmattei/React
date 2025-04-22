import { Form, Posts } from "./styles";
import { Card } from "./components/Card";
import { api } from "../../lib/axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Header } from "./components/Header";

export interface Issue {
  number?: number;
  title?: string;
  body?: string;
  updated_at?: Date;
}

interface SearchProps {
  query?: string;
}

export function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const { register, watch } = useForm<SearchProps>({});

  const getIssues = useCallback(async () => {
    const response = await api.get("repos/rafaelrmattei/React/issues");

    if (response.status === 200) {
      setIssues(response.data);
    }
  }, []);

  const searchIssues = useCallback(async (query: string) => {
    const response = await api.get("search/issues", {
      params: {
        q: `${query} repo:rafaelrmattei/React is:issue in:title,body`,
      },
    });

    if (response.status === 200) {
      setIssues(response.data.items);
    }
  }, []);

  const query = watch("query");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        searchIssues(query);
      } else {
        getIssues();
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [getIssues, searchIssues, query]);

  return (
    <div>
      <Header></Header>

      <Form>
        <div>
          <h1>Publicações</h1>
          <span>{issues.length === 1 ? `${issues.length} publicação` : `${issues.length} publicaçôes`}</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
      </Form>

      <Posts>
        {issues.map((issue) => (
          <Card key={issue.number} issue={issue}></Card>
        ))}
      </Posts>
    </div>
  );
}
