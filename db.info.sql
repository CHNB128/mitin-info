--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2 (Debian 12.2-1.pgdg100+1)
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.info (
    name text,
    surname text,
    patronomic text,
    phone text,
    name_parent text,
    surname_parent text,
    patronomic_parent text,
    phone_parent text
);


ALTER TABLE public.info OWNER TO postgres;

--
-- Data for Name: info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.info (name, surname, patronomic, phone, name_parent, surname_parent, patronomic_parent, phone_parent) FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

